
/* Address: 0x180001b20; Evidence: ev_945679f990179e9603f36f48c3cd377f82c470c236e119aed942facdaccd171f */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined8 FUN_180001b20(uint param_1)

{
  bool bVar1;
  ulonglong in_RAX;
  undefined7 extraout_var;
  
  if (DAT_18001b041 == '\0') {
    if (1 < param_1) {
                    /* WARNING: Subroutine does not return */
      FUN_180001ca8(5);
    }
    bVar1 = __scrt_is_ucrt_dll_in_use();
    if (((int)CONCAT71(extraout_var,bVar1) == 0) || (param_1 != 0)) {
      in_RAX = 0xffffffffffffffff;
      _DAT_18001b048 = 0xffffffffffffffff;
      uRam000000018001b050 = 0xffffffffffffffff;
      _DAT_18001b058 = 0xffffffffffffffff;
      _DAT_18001b060 = 0xffffffffffffffff;
      uRam000000018001b068 = 0xffffffffffffffff;
      _DAT_18001b070 = 0xffffffffffffffff;
    }
    else {
      in_RAX = _initialize_onexit_table((longlong *)&DAT_18001b048);
      if (((int)in_RAX != 0) ||
         (in_RAX = _initialize_onexit_table((longlong *)&DAT_18001b060), (int)in_RAX != 0)) {
        return in_RAX & 0xffffffffffffff00;
      }
    }
    DAT_18001b041 = '\x01';
  }
  return CONCAT71((int7)(in_RAX >> 8),1);
}

