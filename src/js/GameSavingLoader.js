import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      read()
        .then((data) => json(data))
        .then((parsedData) => {
          const saving = JSON.parse(parsedData);
          resolve(saving);
        })
        .catch((error) => reject(error));
    });
  }
}
