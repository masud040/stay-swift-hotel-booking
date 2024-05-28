export function replaceMongoId(obj) {
  const { _id, ...updatedObj } = { id: obj._id.toString(), ...obj };
  return updatedObj;
}
