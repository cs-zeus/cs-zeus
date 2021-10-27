import {
  Vector,
  addVector,
  getUnitVector,
  getVector,
  getVectorDistance,
  isSameVector,
  scalarMultiplyVector,
} from './vector';

export type Optional<T> = T | null;

/**
 * N is the smallest amount of electric charge in SI system. e = 1.602e-19 Coulomb
 */
export const N = 1.602e-19;

/**
 * EPSILON_ZERO represents vacuum permittivity. epsilon_0 = 8.8541878128e-12 Farad/meter
 */
export const EPSILON_ZERO = 8.8541878128e-12;

/**
 * K represent constant in Coulomb's law. k = 9e9 Coulomb
 */
export const K = 9e9;

/**
 * @param name string represents name of the point charge
 * @param q integer represents electric charge
 * @param position vector represents position of the point charge
 * @returns point charge
 */
export const getPointCharge = (name: string, q = 1, position = getVector()) => ({ name, q, position } as PointCharge);
export type PointCharge = { name: string; q: number; position: Vector };
export type TestCharge = { name: 'Test Charge'; q: number; position: Vector };

/**
 * @param pointCharges array of point charges
 * @param testCharge test charge
 * @returns coefficient of N of electric field due to point charges at test charge position
 */
export const getElectricField = (pointCharges: PointCharge[], testCharge: TestCharge) => {
  const samePositionToTestChargeNameList = pointCharges.filter(pointCharge => pointCharge.position.x === testCharge.position.x && pointCharge.position.y === testCharge.position.y).map(pointCharge => pointCharge.name);

  return pointCharges
    .filter(
      (pointCharge) => !samePositionToTestChargeNameList.find(pc => pc === pointCharge.name)
    )
    .reduce(
      (electricField, pointCharge) =>
        addVector(
          scalarMultiplyVector(
            (K * pointCharge.q) /
            Math.pow(
              getVectorDistance(pointCharge.position, testCharge.position),
              2
            ),
            getUnitVector(pointCharge.position)
          ),
          electricField
        ),
      getVector()
    );
};

/**
 * @param pointCharges array of point charges
 * @param testCharge test charge
 * @returns electric field due to point charges at test charge position
 */
export const getElectricFieldMultiplyByN = (pointCharges: PointCharge[], testCharge: TestCharge) =>
  scalarMultiplyVector(N, getElectricField(pointCharges, testCharge));

/**
 * @param pointCharges array of point charges
 * @param testCharge test charge
 * @returns coefficient of N of electric force due to point charges to a test charge
 */
export const getElectricForce = (pointCharges: PointCharge[], testCharge: TestCharge) =>
  scalarMultiplyVector(testCharge.q, getElectricField(pointCharges, testCharge));

/**
 * @param pointCharges array of point charges
 * @param testCharge test charge
 * @returns coefficient of N of electric force due to point charges to a test charge
 */
export const getElectricForceMultiplyByN = (pointCharges: PointCharge[], testCharge: TestCharge) =>
  scalarMultiplyVector(N * testCharge.q, getElectricFieldMultiplyByN(pointCharges, testCharge));
