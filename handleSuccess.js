function handleSuccess (res, data) {
  res.status(200).json({
    status: 'success',
    results: data.length,
    data,
  });
}

module.exports = handleSuccess;