// const errorHandler = (err, req, res,next) =>{
//     console.error(err.stack);
//     res.status(500).json({message: "Ocurrió un error con el servidor"})
// }

// module.exports = errorHandler

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Ocurrió un error en el servidor" });
  };
  
  module.exports = errorHandler;