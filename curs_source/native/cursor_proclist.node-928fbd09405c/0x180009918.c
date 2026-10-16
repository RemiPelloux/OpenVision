
/* Address: 0x180009918; Evidence: ev_44f708ffc0848166709e56f734a44a18b73bde0e969a963784040c8d3d85b722 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined8 FUN_180009918(uint param_1)

{
  bool bVar1;
  ulonglong in_RAX;
  undefined7 extraout_var;
  
  if (DAT_180028d29 == '\0') {
    if (1 < param_1) {
                    /* WARNING: Subroutine does not return */
      FUN_18000a408(5);
    }
    bVar1 = __scrt_is_ucrt_dll_in_use();
    if (((int)CONCAT71(extraout_var,bVar1) == 0) || (param_1 != 0)) {
      in_RAX = 0xffffffffffffffff;
      DAT_180028d30 = 0xffffffffffffffff;
      uRam0000000180028d38 = 0xffffffffffffffff;
      _DAT_180028d40 = 0xffffffffffffffff;
      _DAT_180028d48 = 0xffffffffffffffff;
      uRam0000000180028d50 = 0xffffffffffffffff;
      _DAT_180028d58 = 0xffffffffffffffff;
    }
    else {
      in_RAX = _initialize_onexit_table(&DAT_180028d30);
      if (((int)in_RAX != 0) ||
         (in_RAX = _initialize_onexit_table((longlong *)&DAT_180028d48), (int)in_RAX != 0)) {
        return in_RAX & 0xffffffffffffff00;
      }
    }
    DAT_180028d29 = '\x01';
  }
  return CONCAT71((int7)(in_RAX >> 8),1);
}

