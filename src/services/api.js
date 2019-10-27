import qs from 'qs';

const getArray = (obj) => {
  const result = [];

  Object.keys(obj).forEach(item => {
    result.push(obj[item]);
  });

  return result;
};

class ApiService {
  constructor(Vue) {
    ApiService.prototype._vm = Vue;
    this.storage = localStorage;
  }

  addNewItem(type, options) {
    switch (type) {
      case 'board':
        let currentBoards = getArray(qs.parse(this.storage.getItem('board')));

        currentBoards.push(options);
        return this.setItem('board', currentBoards);

      case 'boardItem':
        const { boardName, boardItems, id } = options;
        const currentItems = qs.parse(this.storage.getItem(`boardItem_${id}`)) || {};
        currentItems[`${boardName}_${id}`] = {items: boardItems, name: boardName};

        return this.setItem(`boardItem_${id}`, currentItems);

      default: return;
    }
  }

  setItem(key, options) {
    return new Promise((resolve, reject) => {
      this.storage.setItem(key, qs.stringify(options));

      resolve(this.getItem(key));
    })
  }

  getItem(key) {
    return new Promise((resolve, reject) => {
      const item = this.storage.getItem(key);

      resolve(qs.parse(item))
    });
  }

  addNewBoard(name, settings) {
    return this.addNewItem('board', {
      name,
      settings,
    })
  }

  getBoardsList() {
    return this.getItem('board')
      .then(res => {
        return getArray(res);
      });
  }

  addNewBoardItem(options) {
    return this.addNewItem('boardItem', options)
  }

  getBoardItems(id) {
    return this.getItem(`boardItem_${id}`)
      .then(res => {
        return res;
      });
  }
}

export default function (Vue, options) {
  Vue.prototype.$api = new ApiService(Vue);
};
