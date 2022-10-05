import {WarehoueseDB} from "../../database/warehouse"
export async function createFacility(facility : Partial<WarehoueseDB.IFacility> & Pick<WarehoueseDB.IFacility, 'name'>) {
    const unit = await WarehoueseDB.collections.facility.findOne({name: facility.name})
    if(!unit) {
        console.log("Facility Already exits");
        throw new Error("Facility Already exits")
    }
    console.log("Facility Created Successfully.")
    return {data: {name: facility.name}, status: 'success'}
}