// // // const { Hero } = require('../../models/heros');
// // const path = require('path');
// // const fs = require('fs/promises');
// // const { cloudinary } = require('../../helpers');

// // const addHero = async (req, res, next) => {
// //     // const { path: tempUpload, originalname } = req.files[0];

// //     try {
// //         const files = req.files;
// //         // console.log('files', files);

// //         const imagesUpload = [];

// //         for (const file of files) {
// //             const { path } = file;

// //             const resultImages = await cloudinary.uploader.upload(path, {
// //                 folder: 'heros',
// //                 // width: 300,
// //             });
// //             console.log('resultImages', resultImages);
// //             imagesUpload.push(resultImages);
// //         }

// //         // const resultImages = await cloudinary.uploader.upload(tempUpload, {
// //         //     folder: 'heros',
// //         //     // width: 300,
// //         // });
// //         // console.log('resultImages', resultImages);
// //         // console.log('imagesUpload', imagesUpload);

// //         // const resultUpload = path.join(
// //         //     __dirname,
// //         //     '../../',
// //         //     'public',
// //         //     'heros',
// //         //     originalname
// //         // );

// //         // const a = imagesUpload.map(el => {
// //         //     return {
// //         //         public_id: el.public_id,
// //         //         url: el.secure_url,
// //         //         name: el.original_filename,
// //         //     };
// //         // });

// //         // console.log('a', a);

// //         console.log('imagesUpload', imagesUpload);
// //         const newHero = {
// //             ...req.body,
// //             // a,
// //             Images: imagesUpload,
// //             // Images: {
// //             //     public_id: resultImages.public_id,
// //             //     url: resultImages.secure_url,
// //             //     name: resultImages.original_filename,
// //             // },
// //         };
// //         // fs.rename(tempUpload, resultUpload);
// //         const result = await Hero.create(newHero);
// //         // const result = await Hero.create({
// //         //     ...req.body,
// //         //     Images: imagesUpload,
// //         // });
// //         res.status(201).json(result);
// //         // await fs.unlink(tempUpload);
// //     } catch (error) {
// //         // await fs.unlink(tempUpload);
// //     }

// // module.exports = addHero;

// const { Hero } = require('../../models/heros');
// const { cloudinary } = require('../../helpers');
// const fs = require('fs/promises');

// const addHero = async (req, res, next) => {
//     // // РАБОТА С 1 КАРТИНКОЙ

//     // // Извлекаю у 1 эл. массива путь
//     // const { path: tempUpload } = req.files[0];
//     // // Закидываю на облако картинку
//     // const resultImages = await cloudinary.uploader.upload(tempUpload, {
//     //     folder: 'heros',
//     //     // width: 300,
//     // });
//     // // Создаю нового героя
//     // const newHero = {
//     //     ...req.body,
//     //     // В модели Hero есть поле Images, распыляю его поверх тела.
//     //     Images: {
//     //         public_id: resultImages.public_id,
//     //         url: resultImages.secure_url,
//     //         name: resultImages.original_filename,
//     //     },
//     // };
//     // // Создаю в базе новго героя по модели Hero
//     // const result = await Hero.create(newHero);
//     // // Кидаю ответ
//     // res.status(201).json(result);
//     // // Удаляю картинку из временной папки Temp
//     // await fs.unlink(tempUpload);

//     // // RESPONSE
//     // //     {
//     // //     "nickname": "nickname1ddda",
//     // //     "real_name": "real_name",
//     // //     "origin_description": "origin_description",
//     // //     "superpowers": "superpowers",
//     // //     "catch_phrase": "catch_phrase",
//     // //     "Images": {
//     // //         "public_id": "heros/apo56fxwewqtv25cqwe5",
//     // //         "url": "https://res.cloudinary.com/dihwu7ikh/image/upload/v1665579571/heros/apo56fxwewqtv25cqwe5.jpg",
//     // //         "name": "Screenshot_2"
//     // //     },
//     // //     "_id": "6346ba335524aab2255b9b05",
//     // //     "createdAt": "2022-10-12T12:59:31.752Z",
//     // //     "updatedAt": "2022-10-12T12:59:31.752Z"
//     // // }

//     // // КОНЕЦ РАБОТЫ С 1 КАРТИНКОЙ

//     // РАБОТА С НЕСКОЛЬКИМИ КАРТИНКАМИ

//     // Извлекаю из тела все картинки
//     const files = req.files;
//     // Создаю массив куда буду кидать результат работы клаудинари
//     const imagesUpload = [];
//     // Перебираю каждый объект
//     for (const file of files) {
//         // Извлекаю путь из каждого объекта картинки
//         const { path } = file;
//         // В переборе закидываю эти картинки на облако
//         const resultImages = await cloudinary.uploader.upload(path, {
//             folder: 'heros',
//             // width: 300,
//         });
//         // Закидываю все эти объекты в массив что выше
//         imagesUpload.push(resultImages);
//     }
//     // Создаю новго героя где говорю что поле Images в моделе это массив объектов
//     const newHero = {
//         ...req.body,
//         Images: imagesUpload,
//     };
//     // Создаю в базе нового героя
//     const result = await Hero.create(newHero);
//     // Даю ответ с бэка
//     res.status(201).json(result);
//     // !!!! Соответвенно не могу передать очищение так как картинки это массив объектов, делать новый перебор?
//     // await fs.unlink(tempUpload);

//     // RESPONSE
//     //     {
//     //     "nickname": "nickname1ddda",
//     //     "real_name": "real_name",
//     //     "origin_description": "origin_description",
//     //     "superpowers": "superpowers",
//     //     "catch_phrase": "catch_phrase",
//     //     "Images": [
//     //         {
//     //             "asset_id": "4ece23bfd9fa47a36ede24a83d348641",
//     //             "public_id": "heros/llb6hks62h9dfzlsdif1",
//     //             "version": 1665579673,
//     //             "version_id": "124ee6fae8e3b88d62b94ff1f23795b6",
//     //             "signature": "36dadb59a741a6eef98acabfa77fb67e3ab02720",
//     //             "width": 720,
//     //             "height": 1031,
//     //             "format": "jpg",
//     //             "resource_type": "image",
//     //             "created_at": "2022-10-12T13:01:13Z",
//     //             "tags": [],
//     //             "bytes": 112987,
//     //             "type": "upload",
//     //             "etag": "f16d88d51f2f1ee55576c55cc41664f0",
//     //             "placeholder": false,
//     //             "url": "http://res.cloudinary.com/dihwu7ikh/image/upload/v1665579673/heros/llb6hks62h9dfzlsdif1.jpg",
//     //             "secure_url": "https://res.cloudinary.com/dihwu7ikh/image/upload/v1665579673/heros/llb6hks62h9dfzlsdif1.jpg",
//     //             "folder": "heros",
//     //             "original_filename": "8db10eb93f57639a91997735dbb9a121",
//     //             "api_key": "144657251318992"
//     //         },
//     //         {
//     //             "asset_id": "2f573a3c1e8426cc12ceb2aa0988966f",
//     //             "public_id": "heros/cb9diveojzn4c2pwee3b",
//     //             "version": 1665579674,
//     //             "version_id": "4a3cff586a5b7e3ad4f3ee68e981e39c",
//     //             "signature": "f84e44f5a9fe52f20478661e4ccf0ca4f46ff80c",
//     //             "width": 500,
//     //             "height": 500,
//     //             "format": "jpg",
//     //             "resource_type": "image",
//     //             "created_at": "2022-10-12T13:01:14Z",
//     //             "tags": [],
//     //             "bytes": 96535,
//     //             "type": "upload",
//     //             "etag": "1aa7d6dc5594890e379ffb092e336f2f",
//     //             "placeholder": false,
//     //             "url": "http://res.cloudinary.com/dihwu7ikh/image/upload/v1665579674/heros/cb9diveojzn4c2pwee3b.jpg",
//     //             "secure_url": "https://res.cloudinary.com/dihwu7ikh/image/upload/v1665579674/heros/cb9diveojzn4c2pwee3b.jpg",
//     //             "folder": "heros",
//     //             "original_filename": "artworks-t7D8y2p7ipr7cEiz-bNHakQ-t500x500",
//     //             "api_key": "144657251318992"
//     //         }
//     //     ],
//     //     "_id": "6346ba9a99fbe8b8612a09d7",
//     //     "createdAt": "2022-10-12T13:01:14.336Z",
//     //     "updatedAt": "2022-10-12T13:01:14.336Z"
//     // }

//     // КОНЕЦ РАБОТЫ С НЕСКОЛЬКИМИ КАРТИНКАМИ

//     //     // РАБОЧИЙЙ ВАРИАНТ СТАРЫЙ ВАРИАНТ
//     //     // const { path: tempUpload, originalname } = req.files[0];
//     //     // try {
//     //     //     const resultUpload = path.join(
//     //     //         __dirname,
//     //     //         '../../',
//     //     //         'public',
//     //     //         'heros',
//     //     //         originalname
//     //     //     );
//     //     //     const newHero = {
//     //     //         ...req.body,
//     //     //         Images: req.files,
//     //     //     };
//     //     //     fs.rename(tempUpload, resultUpload);
//     //     //     const result = await Hero.create(newHero);
//     //     //     res.status(201).json(result);
//     //     // } catch (error) {
//     //     //     await fs.unlink(tempUpload);
//     //     // }
//     // };
// };

// module.exports = addHero;
