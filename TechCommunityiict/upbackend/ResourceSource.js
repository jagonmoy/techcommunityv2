import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const ResourceSourceSchema = new Schema({
    title: {
        type: String,
        require:true
    },
    postCategory: {
        type: String,
        require:true
    },
    formationtype: {
        type:String,
        require:true
    }
});
export default mongoose.model("sources",ResourceSourceSchema);
