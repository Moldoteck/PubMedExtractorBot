// Dependencies
import * as mongoose from 'mongoose'

// Connect to mongoose
mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

mongoose.set('useCreateIndex', true)

// Export models
export * from './User'
export * from './Article'

