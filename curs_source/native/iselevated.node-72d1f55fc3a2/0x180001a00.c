
/* Address: 0x180001a00; Evidence: ev_13317bfcd4edf61a4feaba91b87a92ab8cd1cba50e002f281072f35205c7960b */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined8 FUN_180001a00(uint param_1)

{
  bool bVar1;
  ulonglong in_RAX;
  undefined7 extraout_var;
  
  if (DAT_18001a041 == '\0') {
    if (1 < param_1) {
                    /* WARNING: Subroutine does not return */
      FUN_180001b88(5);
    }
    bVar1 = __scrt_is_ucrt_dll_in_use();
    if (((int)CONCAT71(extraout_var,bVar1) == 0) || (param_1 != 0)) {
      in_RAX = 0xffffffffffffffff;
      _DAT_18001a048 = 0xffffffffffffffff;
      uRam000000018001a050 = 0xffffffffffffffff;
      _DAT_18001a058 = 0xffffffffffffffff;
      _DAT_18001a060 = 0xffffffffffffffff;
      uRam000000018001a068 = 0xffffffffffffffff;
      _DAT_18001a070 = 0xffffffffffffffff;
    }
    else {
      in_RAX = _initialize_onexit_table((longlong *)&DAT_18001a048);
      if (((int)in_RAX != 0) ||
         (in_RAX = _initialize_onexit_table((longlong *)&DAT_18001a060), (int)in_RAX != 0)) {
        return in_RAX & 0xffffffffffffff00;
      }
    }
    DAT_18001a041 = '\x01';
  }
  return CONCAT71((int7)(in_RAX >> 8),1);
}

