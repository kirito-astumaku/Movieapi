import mongoose from 'mongoose'

const genres = [
  'Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary',
  'Drama', 'Family', 'Fantasy', 'History', 'Horror', 'Music', 'Mystery',
  'Romance', 'Science Fiction', 'TV Movie', 'Thriller', 'War', 'Western']
const seats = [
  'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10',
  'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10',
  'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10',
  'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10']

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    enum: genres,
    required: true
  },
  releaseDate: {
    type: Date,
    required: true
  },
  director: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'Directors', required: true
  }],
  cast: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'Cast', required: true
  }],
  durationMins: {
    type: Number,
    required: true
  },
  functionTime: {
    type: Date,
    required: true
  },
  rating: {
    type: Number,
    min: 0,
    max: 10,
    required: true
  },
  seatPrice: {
    type: Number,
    required: true
  },
  seatsLeft: {
    type: Number,
    max: 40,
    default: 40,
    required: true
  },
  seatsAviable: {
    type: [String],
    enum: seats,
    default: seats // al crear el documento se ejecuta la funcion para que utilice los valores por defecto en automatico para cada pelicula creada
  },
  isActive: {
    type: Boolean,
    default: true
  }

}, { timestamps: true, versionKey: false })

const Movie = mongoose.model('Movie', movieSchema)

export default Movie