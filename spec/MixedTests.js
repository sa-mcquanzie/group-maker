mixedTester = new Tester("Tests with a variety of statuses");
obj = new Object;

mixedTester.check("ifDefined", [obj.hello], "hello is a function of obj");
mixedTester.check("equalityOf", [1, "1"], "The string '1' and the number 1 are the same using ==");
mixedTester.check("strictEqualityOf", [1, "1"], "The string '1' and the number 1 are the same using ===");
