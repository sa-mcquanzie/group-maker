groupTester = new Tester("Group class");
group = new Group();

group.add("FakeMember1");
groupTester.check("equalityOf", [group.members[0], "FakeMember1"], "groups can add a member")
