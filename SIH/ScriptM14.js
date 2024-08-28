function result() {
  let adhd = 0;

  var o1 = document.getElementById("flexRadioDefault11_1");
  if (o1.checked) {
    adhd = adhd + 3;
  }

  var o2 = document.getElementById("flexRadioDefault12_1");
  if (o2.checked) {
    adhd = adhd + 3;
  }

  var o3 = document.getElementById("flexRadioDefault13_1");
  if (o3.checked) {
    adhd = adhd + 1;
  }
  var o4 = document.getElementById("flexRadioDefault14_1");
  if (o3.checked) {
    adhd = adhd + 1;
  }
  var o5 = document.getElementById("flexRadioDefault15_1");
  if (o5.checked) {
    adhd = adhd + 1;
  }
  var o6 = document.getElementById("flexRadioDefault16_1");
  var o7 = document.getElementById("flexRadioDefault16_2");
  var o8 = document.getElementById("flexRadioDefault16_3");
  if (o6.checked) {
    adhd = adhd + 3;
  } else if (o7.checked) {
    adhd = adhd + 2;
  } else if (o8.checked) {
    adhd = adhd + 1;
  }
  var o9 = document.getElementById("flexRadioDefault17_1");
  var o10 = document.getElementById("flexRadioDefault17_2");
  var o11 = document.getElementById("flexRadioDefault17_3");
  if (o9.checked) {
    adhd = adhd + 3;
  } else if (o10.checked) {
    adhd = adhd + 2;
  } else if (o11.checked) {
    adhd = adhd + 1;
  }
  var o12 = document.getElementById("flexRadioDefault18_1");
  var o13 = document.getElementById("flexRadioDefault18_2");
  var o14 = document.getElementById("flexRadioDefault18_3");
  if (o12.checked) {
    adhd = adhd + 3;
  } else if (o13.checked) {
    adhd = adhd + 2;
  } else if (o14.checked) {
    adhd = adhd + 1;
  }
  // str = stress
  let str = 0;
  var o15 = document.getElementById("flexRadioDefault19_1");
  var o16 = document.getElementById("flexRadioDefault19_2");
  var o17 = document.getElementById("flexRadioDefault19_3");
  if (o15.checked) {
    str = str + 3;
  } else if (o16.checked) {
    str = str + 2;
  } else if (o17.checked) {
    str = str + 1;
  }
  var o18 = document.getElementById("flexRadioDefault20_1");
  var o19 = document.getElementById("flexRadioDefault20_2");
  var o20 = document.getElementById("flexRadioDefault20_3");
  if (o18.checked) {
    str = str + 3;
  } else if (o19.checked) {
    str = str + 2;
  } else if (o20.checked) {
    str = str + 1;
  }
  var o21 = document.getElementById("flexRadioDefault21_1");
  if (o21.checked) {
    str = str + 3;
  }
  var o22 = document.getElementById("flexRadioDefault22_1");
  var o23 = document.getElementById("flexRadioDefault22_2");
  var o24 = document.getElementById("flexRadioDefault22_3");
  if (o22.checked) {
    str = str + 3;
  } else if (o23.checked) {
    str = str + 2;
  } else if (o24.checked) {
    str = str + 1;
  }
  var o25 = document.getElementById("flexRadioDefault23_1");
  var o26 = document.getElementById("flexRadioDefault23_2");
  var o27 = document.getElementById("flexRadioDefault23_3");
  if (o25.checked) {
    str = str + 3;
  } else if (o26.checked) {
    str = str + 2;
  } else if (o27.checked) {
    str = str + 1;
  }
  var o28 = document.getElementById("flexRadioDefault24_1");
  var o29 = document.getElementById("flexRadioDefault24_2");
  var o30 = document.getElementById("flexRadioDefault24_3");
  if (o28.checked) {
    str = str + 3;
  } else if (o29.checked) {
    str = str + 2;
  } else if (o30.checked) {
    str = str + 1;
  }
  var o31 = document.getElementById("flexRadioDefault25_1");
  var o32 = document.getElementById("flexRadioDefault25_2");
  var o33 = document.getElementById("flexRadioDefault25_3");
  if (o31.checked) {
    str = str + 3;
  } else if (o32.checked) {
    str = str + 2;
  } else if (o33.checked) {
    str = str + 1;
  }
  var o34 = document.getElementById("flexRadioDefault26_1");
  var o35 = document.getElementById("flexRadioDefault26_2");
  var o36 = document.getElementById("flexRadioDefault26_3");
  if (o34.checked) {
    str = str + 3;
  } else if (o35.checked) {
    str = str + 2;
  } else if (o36.checked) {
    str = str + 1;
  }
  // SM = Social Media
  let sm = 0;
  var o37 = document.getElementById("flexRadioDefault27_1");
  if (o37.checked) {
    sm = sm + 1;
  }
  var o38 = document.getElementById("flexRadioDefault28_1");
  if (o38.checked) {
    sm = sm + 3;
  }
  var o39 = document.getElementById("flexRadioDefault29_1");
  if (o39.checked) {
    sm = sm + 3;
  }
  var o40 = document.getElementById("flexRadioDefault30_1");
  if (o40.checked) {
    sm = sm + 3;
  }
  var o41 = document.getElementById("flexRadioDefault31_1");
  if (o41.checked) {
    sm = sm + 3;
  }
  var o42 = document.getElementById("flexRadioDefault32_3");
  var o43 = document.getElementById("flexRadioDefault32_2");
  if (o42.checked) {
    sm = sm + 3;
  } else if (o43.checked) {
    sm = sm + 2;
  }
  var o44 = document.getElementById("flexRadioDefault33_1");
  var o45 = document.getElementById("flexRadioDefault33_2");
  var o46 = document.getElementById("flexRadioDefault33_3");
  if (o44.checked) {
    sm = sm + 3;
  } else if (o45.checked) {
    sm = sm + 2;
  } else if (o46.checked) {
    sm = sm + 1;
  }
  var o47 = document.getElementById("flexRadioDefault34_1");
  if (o47.checked) {
    sm = sm + 3;
  }

  // dep = Depression
  let dep = 0;
  var o48 = document.getElementById("flexRadioDefault35_1");
  var o49 = document.getElementById("flexRadioDefault35_2");
  var o50 = document.getElementById("flexRadioDefault35_3");
  if (o48.checked) {
    dep = dep + 3;
  } else if (o49.checked) {
    dep = dep + 2;
  } else if (o50.checked) {
    dep = dep + 1;
  }
  var o51 = document.getElementById("flexRadioDefault36_1");
  if (o51.checked) {
    dep = dep + 3;
  }
  var o52 = document.getElementById("flexRadioDefault37_1");
  if (o52.checked) {
    dep = dep + 3;
  }
  var o53 = document.getElementById("flexRadioDefault38_1");
  if (o53.checked) {
    dep = dep + 3;
  }
  var o54 = document.getElementById("flexRadioDefault39_1");
  var o55 = document.getElementById("flexRadioDefault39_2");
  var o56 = document.getElementById("flexRadioDefault39_3");
  if (o54.checked) {
    dep = dep + 3;
  } else if (o55.checked) {
    dep = dep + 2;
  } else if (o56.checked) {
    dep = dep + 1;
  }
  var o57 = document.getElementById("flexRadioDefault40_1");
  if (o57.checked) {
    dep = dep + 3;
  }
  var o58 = document.getElementById("flexRadioDefault41_1");
  if (o58.checked) {
    dep = dep + 3;
  }
  var o59 = document.getElementById("flexRadioDefault42_1");
  if (o59.checked) {
    dep = dep + 3;
  }

  let dep_1 = (dep / 23) * 100;
  let str_1 = (str / 24) * 100;
  let sm_1 = (sm / 24) * 100;
  let adhd_1 = (adhd / 24) * 100;

  let dep_2 = dep_1.toFixed(2);
  let str_2 = str_1.toFixed(2);
  let sm_2 = sm_1.toFixed(2);
  let adhd_2 = adhd_1.toFixed(2);

  localStorage.setItem("dep", dep_2);
  localStorage.setItem("str", str_2);
  localStorage.setItem("sm", sm_2);
  localStorage.setItem("adhd", adhd_2);

  location.href = "result.html";

  // alert(
  //   "Depression:" +
  //     dep_2 +
  //     "% " +
  //     "Academic stress:" +
  //     str_2 +
  //     "% " +
  //     "Social media:" +
  //     sm_2 +
  //     "% " +
  //     "adhd:" +
  //     adhd_2 +
  //     "%"
  // );
}
