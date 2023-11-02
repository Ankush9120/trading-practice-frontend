import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setStockListDataLoadingOff, setStockListDataLoadingOn, setStockListData } from "../../store/slices/stockListDataSlice";

export default function useDashboard() {

    const dispatch = useDispatch();

    const stockListDataStates = useSelector((state) => state.stockListData);

    const data = {};

    data.stockListData = stockListDataStates.stockListData;
    data.stockListDataLoading = stockListDataStates.stockListDataLoading;


    function getAllStockData() {
        dispatch(setStockListDataLoadingOn());

        const api = "http://localhost:3001/api/getAllStockData";


        axios.post(api, null, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        }).then(({ data }) => {
            dispatch(setStockListData(data));
        }).catch((error) => {
            console.log(error)
        }).finally(()=>{
            dispatch(setStockListDataLoadingOff());
        })

    }

    function createWatchlist() {
        const api = "http://localhost:3001/api/createNewWatchlist";

        axios.post(api, null, {
            Accept: "application/json",
            "Content-Type": "application/json",
        }).then((data) => {
            console.log(data);
        })
    }

    function getWatchlistData() {
        const api = "http://localhost:3001/api/getWatchlist";
        axios.post(api, null, {
            Accept: "application/json",
            "Content-Type": "application/json",
        }).then(({data})=>{
            console.log(data);
        })
    }

    let fnsDashboard = {
        getAllStockData,
        createWatchlist,
        getWatchlistData
    }

    let dataDashboard = data;

    return { fnsDashboard, dataDashboard }
}
