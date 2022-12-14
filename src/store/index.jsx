import { configureStore } from '@reduxjs/toolkit'
import isLoadingSlice from './slice/isLoading.slice'

export default configureStore({
    reducer: {
        isLoading:isLoadingSlice
    }
})
