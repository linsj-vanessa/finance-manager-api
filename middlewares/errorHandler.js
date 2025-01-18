const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
  
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  
    res.status(statusCode).json({
        message: err.message || 'Erro interno do servidor',
        errors: err.errors || undefined
    });
  };
  
  module.exports = errorHandler;