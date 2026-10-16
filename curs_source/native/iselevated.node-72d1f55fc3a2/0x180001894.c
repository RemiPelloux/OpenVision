
/* Address: 0x180001894; Evidence: ev_7c740923105ae5e2d2a49267a19d3a9309b25fcd0ee4810b059d6298cd3f5a6b */

/* Library Function - Single Match
    __scrt_dllmain_after_initialize_c
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 __scrt_dllmain_after_initialize_c(void)

{
  bool bVar1;
  undefined7 extraout_var;
  undefined8 uVar2;
  ulonglong uVar3;
  
  bVar1 = __scrt_is_ucrt_dll_in_use();
  if ((int)CONCAT71(extraout_var,bVar1) == 0) {
    uVar2 = FUN_180001808();
    uVar3 = FUN_180005190((int)uVar2);
    if ((int)uVar3 != 0) {
      return uVar3 & 0xffffffffffffff00;
    }
    uVar2 = thunk_FUN_180005310();
  }
  else {
    uVar2 = FUN_180001d54();
  }
  return CONCAT71((int7)((ulonglong)uVar2 >> 8),1);
}

