memberTester = new Tester("Member class");
member = new Member("McQuanzie");

memberTester.check("equalityOf", [member.name, "McQuanzie"], "members have a name")
