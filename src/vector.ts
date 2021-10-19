/**
 * @param x integer represents x coordinate
 * @param y integer represents y coordinate
 * @returns vector with x, y coordinates
 */
export const getVector = (x = 0, y = 0) => ({ x, y } as Vector);
export type Vector = { x: number; y: number };

/**
 * @param vector represents position
 * @returns size of the vector
 */
export const getVectorSize = (vector: Vector) => Math.sqrt(vector.x ** 2 + vector.y ** 2);

/**
 * @param vector1 represents first vector
 * @param vector2 represents second vector. Default to vector at origin
 * @returns distance between two vectors
 */
export const getVectorDistance = (vector1: Vector, vector2 = getVector()) =>
  getVectorSize(getVector(vector1.x - vector2.x, vector1.y - vector2.y));

/**
 * @param vector represents vector
 * @returns unit vector of the vector
 */
export const getUnitVector = (vector: Vector) => scalarMultiplyVector(1 / getVectorSize(vector), vector);

/**
 * @param vector1 represents first vector
 * @param vector2 represents second vector. Default to vector at origin
 * @returns new vector as a result of addition of two vectors
 */
export const addVector = (vector1: Vector, vector2 = getVector()) =>
  getVector(vector1.x + vector2.x, vector1.y + vector2.y);

/**
 * @param vector1 represents first vector
 * @param vector2 represents second vector. Default to vector at origin
 * @returns new vector as a result of subtraction of two vectors
 */
export const subtractVector = (vector1: Vector, vector2 = getVector()) =>
  getVector(vector1.x - vector2.x, vector1.y - vector2.y);

/**
 *
 * @param scalar represents scalar value
 * @param vector represents vector
 * @returns new vector as a result of multiplication of scalar and vector
 */
export const scalarMultiplyVector = (scalar: number, vector: Vector) => getVector(vector.x * scalar, vector.y * scalar);

/**
 * @param vector1 represents first vector
 * @param vector2 represents second vector
 * @returns boolean indicate is vector is the same
 */
export const isSameVector = (vector1: Vector, vector2: Vector) =>
  vector1.x === vector2.x &&
  vector1.y === vector2.y &&
  !(vector1.x === vector2.x || vector1.y !== vector2.y) &&
  !(vector1.x !== vector2.x || vector1.y === vector2.y);
