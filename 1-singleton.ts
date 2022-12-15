// class Settings {
//   static instance: Settings; // 靜態方法只能由類別本身呼叫; 由類別所建立的物件實體（instance）上不能被呼叫
//   public readonly mode = 'dark';

//   // prevent new with private constructor -> new won't work
//   private constructor() {}

//   // to ensure that only 1 obj. can be created
//   static getInstance(): Settings {
//     if (!Settings.instance) {
//       Settings.instance = new Settings();
//     }
//     return Settings.instance;
//   }
// }

// console.log(Settings.instance);

// const settings = Settings.getInstance();
// console.log(settings);

// const set = new Settings();
// console.log(set.instance);

// /**
//  * In JS
//  * 1. we have literals and also the concept of global data
//  * 2. obj. are passed around by refernce
//  */
// const settings = {
//   dark: 'true',
// };
// console.log(settings.dark);
