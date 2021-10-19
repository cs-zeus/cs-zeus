import { TestCharge, getElectricField, getElectricForce, getPointCharge } from '../src/index'

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
    const pointCharge = getPointCharge('Charge 1', 1, getVector(1, 1));

    const electricField = getElectricField([pointCharge], testCharge);
    
    expect(electricField.x).toBe(3181980515.3394628);
    expect(electricField.y).toBe(3181980515.3394628);
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
    const pointCharge = getPointCharge('Charge 1', 1, getVector(1, 1));

    const electricForce = getElectricForce([pointCharge], testCharge);
    
    expect(electricForce.x).toBe(6363961030.6789255);
    expect(electricForce.y).toBe(6363961030.6789255);
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
});