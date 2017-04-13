class Author {
  static public IEnuberable<String> TwitterHandles(IEnumerable<Author> authors, String company) {
    var result = new List<String >();
    var loopStart = authors
          .Where(a=> a.Company == company)
          .Select(a => a.TwitterHandle)
          .Where(h => h!= null);
    // foreach (String handle in loopStart) {
    //   var handle = a.TwitterHandles;
    //   if (handle != null)
    //     result.add(handle);
    // }
    return result;
  }
}


class Service... {
  equipment.AllOfferings()
    .Select( o => o.Region)
    .Distinct()
    .Select(r => possiblePreference(equipment, r))
    .ToList()
    .ForEach(o => o.ispreferred = true);
}
