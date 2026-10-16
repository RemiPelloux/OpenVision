
/* Address: 0x180004d14; Evidence: ev_7aa4cb1b360231c18e7ff7ac220e0f16f0a368f9bed433d43bc491fa8940ca50 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined8 FUN_180004d14(uint param_1)

{
  bool bVar1;
  ulonglong in_RAX;
  undefined7 extraout_var;
  
  if (DAT_180028159 == '\0') {
    if (1 < param_1) {
                    /* WARNING: Subroutine does not return */
      FUN_180004e9c(5);
    }
    bVar1 = __scrt_is_ucrt_dll_in_use();
    if (((int)CONCAT71(extraout_var,bVar1) == 0) || (param_1 != 0)) {
      in_RAX = 0xffffffffffffffff;
      _DAT_180028160 = 0xffffffffffffffff;
      uRam0000000180028168 = 0xffffffffffffffff;
      _DAT_180028170 = 0xffffffffffffffff;
      _DAT_180028178 = 0xffffffffffffffff;
      uRam0000000180028180 = 0xffffffffffffffff;
      _DAT_180028188 = 0xffffffffffffffff;
    }
    else {
      in_RAX = _initialize_onexit_table((longlong *)&DAT_180028160);
      if (((int)in_RAX != 0) ||
         (in_RAX = _initialize_onexit_table((longlong *)&DAT_180028178), (int)in_RAX != 0)) {
        return in_RAX & 0xffffffffffffff00;
      }
    }
    DAT_180028159 = '\x01';
  }
  return CONCAT71((int7)(in_RAX >> 8),1);
}

