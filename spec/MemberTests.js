memberTester = new Tester("Member class");

let member = new Member("McQuanzie");
let member2 = new Member("EvilMcQuanzie");

member.addConflict(member2);

memberTester.check("equalityOf", [member.name, "McQuanzie"], "members have a name");
memberTester.check("ifInArray", [member.conflicts, member2], "members can have conflicts")
