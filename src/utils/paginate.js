import _ from 'lodash';

export function paginate(items, pageNumber, pageSize){

    const startIndex = (pageNumber - 1) * pageSize;
    //in order to chain methods with lodash, you have to create a lodash wrapper for the
    //array _.*items) and then change it back to a regular array with .value()
    return _(items).slice(startIndex).take(pageSize).value();

}