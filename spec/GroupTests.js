groupTester = new Tester("Group class");
group = new Group;

member1 = new Double;
member1.does("name", "McQuanzie");

member2 = new Double;
member2.does("name", "Eggbert");

group.add(member1);
group.add(member2);

groupTester.check("equalityOf", [group.members[0], member1], "groups can add a member")
groupTester.check("arrayIsLength", [2, group.members], "groups can have several members")