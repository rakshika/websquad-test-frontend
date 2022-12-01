import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./donor-service"

export const findDonorThunk = createAsyncThunk(
    'donor/findDonors', async () =>
        await service.findDonors()
)
export const deleteDonorThunk = createAsyncThunk(
    'donor/deleteDonor', async(donorId) => {
        await service.deleteDonor(donorId)
        return donorId
    }
)
export const createDonorThunk = createAsyncThunk(
    'donor/createDonor', async (thunkAPI) =>
        await service.createDonor(thunkAPI)
)
export const updateDonorThunk = createAsyncThunk(
    'donor/updateDonor', async (donor) =>
        await service.updateDonor(donor)
)