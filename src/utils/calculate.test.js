import Calculate from './calculate';

describe('Calculate', () => {
    let expression;
     test('evaluates expression correctly', () => {
      expression = '4+4'
      expect(Calculate(expression)).toBe(8);
      expression = '2+3+4-4*3'
      expect(Calculate(expression)).toBe(-3);
      expression = '0.5+2.3'
      expect(Calculate(expression)).toBe(2.8);
    })

    test('throws an error when expression starts with any other operator except "-" ', () => {

        expression = '*8-2'
        expect(Calculate(expression)).toThrow();
    
        expression = '+8-6'
        expect(Calculate(expression)).toThrow();
    
        expression = '/12-6'
        expect(Calculate(expression)).toThrow();
      })
})