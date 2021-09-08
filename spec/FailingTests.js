nonsenseTester = new Tester("Tests which ought to fail")

nonsenseTester.check("strictEqualityOf", [42, "bananas"], "bananas are exactly equal to 42")
