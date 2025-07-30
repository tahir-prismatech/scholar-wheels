export class paginationDetails{
    static paginationDetailGetter({dataPerPage, totalDataLength}){
        return Math.ceil(totalDataLength / dataPerPage);
    }
}