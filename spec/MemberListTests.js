memberListTester = new Tester("MemberList class");
students = new MemberList();

memberListTester.check("ifDefined", [students.all], "member lists have a list of all members");
