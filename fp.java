Class Test {

  public List<String> twitterHandles(List<Author> authors, String company){
    return authors.stream()
      .filter(a -> a.getCompany().equals(company))
      .map(a -> a.getTwitterHandle())
      .filter(h -> null != h)
      .collection(toList());
  }

  public Set<String> getReadersOfBooks(Collection<String> reads, Collection<String> books, Date date){
    Set<String> result = new HashSet<>();
    Map<String, Collection<String>> data = DataService.getBooksReadOn(date);
    for( Map.Entry<String, Collection<String>> e: data.entrySet()) {
      for(String bookId: books){
        if(e.getValue().contains(bookId) && readers.contains(e.getKey())){
          result.add(e.getKey());
        }
      }
    }
  }

}

interface DataService ...{
  Map<String, Collection<String>> getBooksReadOn(Date date);
}
