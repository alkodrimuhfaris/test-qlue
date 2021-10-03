import searchFunction from '../../Helpers/searchFunction';

const initialState = {
  success: false,
  pending: false,
  error: false,

  successIndo: false,
  pendingIndo: false,
  errorIndo: false,

  search: '',

  rawData: [],
  data: [],
  showData: [],
  maxPage: 1,
  offset: 0,
  dataShowed: 10,
  totalData: 0,
  page: 1,

  indoData: {
    name: 'Indonesia',
    positif: 4218142,
    sembuh: 4042215,
    meninggal: 142115,
    dirawat: 33812,
  },
  selectedData: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
    case 'COVID_DATA_PENDING': {
      return {
        ...state,
        success: false,
        pending: true,
        error: false,
      };
    }
    case 'COVID_DATA_REJECTED': {
      return {
        ...state,
        success: false,
        pending: false,
        error: true,
      };
    }
    case 'COVID_DATA_FULFILLED': {
      const {data: getData} = action.payload;
      const newData = getData.map((val) => {
        const {attributes: x} = val;
        return {
          fid: x.FID,
          kodeProvinsi: x.Kode_Provi,
          name: x.Provinsi,
          positif: x.Kasus_Posi,
          sembuh: x.Kasus_Semb,
          meninggal: x.Kasus_Meni,
        };
      });

      const data = searchFunction({
        data: newData,
        searchVal: state.search,
        fieldSearch: 'name',
      });

      const totalData = data.length;
      const {offset, dataShowed} = state;
      const maxPage =
        dataShowed === 'all' ? 1 : Math.ceil(totalData / dataShowed);

      const endData =
        offset + dataShowed < totalData ? offset + dataShowed : totalData;
      const showData = data.slice(offset, endData);

      return {
        ...state,
        success: true,
        pending: false,
        error: false,

        selectedData: newData.length ? newData[0] : null,
        maxPage,
        rawData: newData,
        data,
        showData,
        totalData,
      };
    }
    case 'SELECT_CHART': {
      const fid = action.payload;
      const selectedData = {
        fid: null,
        kodeProvinsi: null,
        name: null,
        positif: null,
        sembuh: null,
        meninggal: null,
      };
      const {rawData} = state;
      rawData.forEach((x) => {
        if (x.fid === fid) {
          selectedData.fid = x.fid;
          selectedData.kodeProvinsi = x.kodeProvinsi;
          selectedData.name = x.name;
          selectedData.positif = x.positif;
          selectedData.sembuh = x.sembuh;
          selectedData.meninggal = x.meninggal;
        }
        return x;
      });

      return {
        ...state,
        selectedData,
      };
    }
    case 'CHART_CHANGE_PAGE': {
      const {data, dataShowed, maxPage} = state;

      let page = action.payload;
      page = page < maxPage ? page : maxPage;
      const totalData = data.length;
      const offset = (page - 1) * dataShowed;
      const endData =
        offset + dataShowed < totalData ? offset + dataShowed : totalData;
      const showData = data.slice(offset, endData);

      return {
        ...state,
        page,
        offset,
        showData,
      };
    }
    case 'CHART_CHANGE_DATA_PER_PAGE': {
      const dataShowed = action.payload;
      const {data, totalData} = state;
      const page = 1;
      const offset = 0;

      const maxPage =
        dataShowed === 'all' ? 1 : Math.ceil(totalData / dataShowed);

      const endData =
        offset + dataShowed < totalData ? offset + dataShowed : totalData;
      const showData =
        dataShowed === 'all'
          ? data.map((x) => ({...x}))
          : data.slice(offset, endData);

      return {
        ...state,
        page,
        offset,
        dataShowed,
        maxPage,
        showData,
      };
    }
    case 'CHART_SEARCH': {
      const search = action.payload;
      const {dataShowed, rawData: oldData} = state;
      const page = 1;
      const offset = page - 1;

      const data = oldData.length
        ? searchFunction({
            data: oldData,
            searchVal: search,
            fieldSearch: 'name',
          })
        : [];
      const totalData = data.length;
      const maxPage =
        dataShowed === 'all' ? 1 : Math.ceil(totalData / dataShowed);

      const endData =
        dataShowed === 'all'
          ? totalData
          : offset + dataShowed < totalData
          ? offset + dataShowed
          : totalData;
      const showData = data.slice(offset, endData);

      return {
        ...state,
        search,
        page,
        offset,
        data,
        showData,
        totalData,
        maxPage,
      };
    }
    case 'COVID_DATA_INDO_PENDING': {
      return {
        ...state,
        successIndo: false,
        pendingIndo: true,
        errorIndo: false,
      };
    }
    case 'COVID_DATA_INDO_REJECTED': {
      return {
        ...state,
        successIndo: false,
        pendingIndo: false,
        errorIndo: true,
      };
    }
    case 'COVID_DATA_INDO_FULFILLED': {
      const {data} = action.payload.data;
      const {positif, sembuh, dirawat, meninggal} = data;
      const indoData = {
        ...data,
        positif: positif.split(',').join('') * 1,
        sembuh: sembuh.split(',').join('') * 1,
        dirawat: dirawat.split(',').join('') * 1,
        meninggal: meninggal.split(',').join('') * 1,
      };

      return {
        ...state,
        successIndo: true,
        pendingIndo: false,
        errorIndo: false,

        indoData,
      };
    }
  }
};
