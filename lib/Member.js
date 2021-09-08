class Member {
  constructor(name) {
    this.name = name;
    this.conflicts = [];
  }

  addConflict(member) {
    this.conflicts.push(member);
  }
}