import { TestCharge, getElectricField, getElectricFieldMultiplyByN, getElectricForce, getElectricForceMultiplyByN, getPointCharge } from '../src/index'

import { getVector } from '../src/vector';

describe('Calculate electric field correctly', () => {
  test('zero point charge', () => {
    const testCharge = getPointCharge('Test Charge') as TestCharge;

    const electricField = getElectricField([], testCharge);

    expect(electricField.x).toBe(0);
    expect(electricField.y).toBe(0);
  });


  test('one point charge', () => {
    const testCharge = getPointCharge('Test Charge') as TestCharge;
    const pointCharge = getPointCharge('Charge 1', 1, getVector(0, 1));

    const electricField = getElectricField([pointCharge], testCharge);

    expect(electricField.x).toBe(0);
    expect(electricField.y).toBe(9e9);
  });

  test('three point charges', () => {
    const testCharge = getPointCharge('Test Charge') as TestCharge;
    const pointCharge1 = getPointCharge('Charge 1', 1, getVector(1, 1));
    const pointCharge2 = getPointCharge('Charge 2', 2, getVector(2, 2));
    const pointCharge3 = getPointCharge('Charge 3', 3, getVector(3, 3));

    const electricField = getElectricField([pointCharge1, pointCharge2, pointCharge3], testCharge);

    expect(electricField.x).toBe(5833630944.789016);
    expect(electricField.y).toBe(5833630944.789016);
  });

  test('electric field should be zero when it is at the same position as test charge', () => {
    const testCharge = getPointCharge('Test Charge') as TestCharge;
    const pointCharge1 = getPointCharge('Charge 1', 1, getVector(0, 0));
    const electricField = getElectricField([pointCharge1], testCharge);

    expect(electricField.x).toBe(0);
    expect(electricField.y).toBe(0);
  });

  test('multiply by N - three point charges', () => {
    const testCharge = getPointCharge('Test Charge') as TestCharge;
    const pointCharge1 = getPointCharge('Charge 1', 1, getVector(0, 1));
    const pointCharge2 = getPointCharge('Charge 2', 2, getVector(1, 0));
    const pointCharge3 = getPointCharge('Charge 3', 3, getVector(1, 1));

    const electricField = getElectricFieldMultiplyByN([pointCharge1, pointCharge2, pointCharge3], testCharge);

    expect(electricField.x).toBe(4.412859835672145e-9);
    expect(electricField.y).toBe(2.9710598356721455e-9);
  });
});

describe('Calculate electric force correctly', () => {
  test('zero point charge', () => {
    const testCharge = getPointCharge('Test Charge', 2) as TestCharge;

    const electricForce = getElectricForce([], testCharge);

    expect(electricForce.x).toBe(0);
    expect(electricForce.y).toBe(0);
  });


  test('one point charge', () => {
    const testCharge = getPointCharge('Test Charge', 2) as TestCharge;
    const pointCharge = getPointCharge('Charge 1', 1, getVector(0, 1));

    const electricForce = getElectricForce([pointCharge], testCharge);

    expect(electricForce.x).toBe(0);
    expect(electricForce.y).toBe(18e9);
  });

  test('three point charges', () => {
    const testCharge = getPointCharge('Test Charge', 2) as TestCharge;
    const pointCharge1 = getPointCharge('Charge 1', 1, getVector(1, 1));
    const pointCharge2 = getPointCharge('Charge 2', 2, getVector(2, 2));
    const pointCharge3 = getPointCharge('Charge 3', 3, getVector(3, 3));

    const electricForce = getElectricForce([pointCharge1, pointCharge2, pointCharge3], testCharge);

    expect(electricForce.x).toBe(11667261889.578032);
    expect(electricForce.y).toBe(11667261889.578032);
  });

  test('electric force should be zero when it is at the same position as test charge', () => {
    const testCharge = getPointCharge('Test Charge') as TestCharge;
    const pointCharge1 = getPointCharge('Charge 1', 1, getVector(0, 0));
    const electricField = getElectricForce([pointCharge1], testCharge);

    expect(electricField.x).toBe(0);
    expect(electricField.y).toBe(0);
  });

  test('multiply by N - three point charges', () => {
    const testCharge = getPointCharge('Test Charge') as TestCharge;
    const pointCharge1 = getPointCharge('Charge 1', 1, getVector(0, 1));
    const pointCharge2 = getPointCharge('Charge 2', 2, getVector(1, 0));
    const pointCharge3 = getPointCharge('Charge 3', 3, getVector(1, 1));

    const electricField = getElectricForceMultiplyByN([pointCharge1, pointCharge2, pointCharge3], testCharge);

    expect(electricField.x).toBe(7.069401456746777e-28);
    expect(electricField.y).toBe(4.759637856746777e-28);
  });
});