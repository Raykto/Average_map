const DataStudents = [
    [
      "s1",
      {
        name: "Alice",
        mention: "",
        notes: [11, 12, 18],
        average: null,
        url: "http://lorempixel.com/100/100/cats/1",
      },
    ],
    [
      "s2",
      {
        name: "Alan",
        mention: "",
        notes: [10, 14.5, 11],
        average: null,
        url: "http://lorempixel.com/100/100/cats/2",
      },
    ],
    [
      "s3",
      {
        name: "Bernard",
        mention: "",
        notes: [11, 9, 9],
        average: null,
        url: "http://lorempixel.com/100/100/cats/2",
      },
    ],
    [
      "s4",
      {
        name: "Naoudi",
        mention: "",
        notes: [14.5, 19, 18],
        average: null,
        url: "http://lorempixel.com/100/100/cats/3",
      },
    ],
    [
      "s5",
      {
        name: "Fenley",
        mention: "",
        notes: [9, 7, 11],
        average: null,
        url: "http://lorempixel.com/100/100/cats/4",
      },
    ],
    [
      "s6",
      {
        name: "Shere Khan",
        mention: "",
        notes: [],
        average: null,
        url: "http://lorempixel.com/100/100/cats/4",
      },
    ],
  ];
  
  // création du Map
  const dataStMap = new Map(DataStudents);

  dataStMap.forEach((value, key) => {
    const sum = value.notes.reduce((acc, note) => acc + note, 0);
    const average = sum / value.notes.length || 0; 
    value.average = average.toFixed(2); 
  });

///// Mention
dataStMap.forEach((value, key) => {
    const sum = value.notes.reduce((acc, note) => acc + note, 0);
    const average = sum / value.notes.length || 0;
    value.average = average.toFixed(2);
  
    value.mention =
      average >= 17 ? "TB"
      : average >= 14 ? "B"
      : average >= 12 ? "AB"
      : average >= 10 ? "P"
      : average <= 10 ? "NA"
      : "";
  }); 
  
  console.log(dataStMap);

