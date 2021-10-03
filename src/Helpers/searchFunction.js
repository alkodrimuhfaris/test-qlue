const searchFunc = {
  searchFunction: ({data = [], searchVal = '', fieldSearch = 'name'}) => {
    const modData = data.map((x) => ({...x}));
    const searchResult = [];
    if (searchVal || searchVal !== '') {
      modData.forEach((x) => {
        const name = x[fieldSearch];
        const val = searchFunc.deepSearch(name, searchVal);
        if (val) {
          const newData = {
            ...x,
          };
          newData[fieldSearch] = val;
          searchResult.push(newData);
        }
      });
      return searchResult;
    }
    return modData.map((x) => {
      const name = x[fieldSearch];
      const newData = {...x};
      newData[fieldSearch] = `<p>${name}</p>`;
      return {
        ...newData,
      };
    });
  },
  deepSearch: (name = '', searchVal = '') => {
    const searchArr = searchVal.split('');
    const nameAr = name.split('');
    const shouldBold = [];
    if (searchArr.length > nameAr.length) {
      return null;
    }
    for (let key = 0; key < nameAr.length; key++) {
      if (shouldBold.length) {
        if (
          shouldBold[shouldBold.length - 1].end > key &&
          nameAr.length - (shouldBold[shouldBold.length - 1].end + 1) >=
            searchArr.length
        ) {
          const bold = searchFunc.microSearch({name, key, searchArr});
          if (bold) {
            shouldBold.push(bold);
          }
        }
      } else {
        const bold = searchFunc.microSearch({name, key, searchArr});
        if (bold) {
          shouldBold.push(bold);
        }
      }
    }
    if (shouldBold.length) {
      shouldBold.forEach((x) => {
        nameAr[x.start] = `<strong>${nameAr[x.start]}`;
        nameAr[x.end] = `${nameAr[x.end]}</strong>`;
      });
      const resultname = nameAr.join('');
      return `<p>${resultname}</p>`;
    }
    return null;
  },
  microSearch: ({name = '', key = 0, searchArr = []}) => {
    const nameAr = name.split('');
    const el = nameAr[key];
    const bold = {
      start: 0,
      end: 0,
    };
    if (el.toLowerCase() === searchArr[0].toLowerCase()) {
      for (let keyname = 0; keyname < searchArr.length; keyname++) {
        const searchArEl = searchArr[keyname];
        if (nameAr.length < key + searchArr.length) {
          break;
        }
        if (searchArEl.toLowerCase() !== nameAr[key + keyname].toLowerCase()) {
          break;
        } else if (keyname === searchArr.length - 1) {
          bold.start = key;
          bold.end = key + keyname;
          return bold;
        }
      }
    }
    return null;
  },
};

export default searchFunc.searchFunction;
