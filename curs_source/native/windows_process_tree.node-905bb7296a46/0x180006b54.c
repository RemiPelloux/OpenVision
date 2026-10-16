
/* Address: 0x180006b54; Evidence: ev_6e0ed7c84d7f722307235154b1ba45781ced8ce9c6771800bf74d8e5a26ca84f */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined8 FUN_180006b54(uint param_1)

{
  bool bVar1;
  ulonglong in_RAX;
  undefined7 extraout_var;
  
  if (DAT_1800241a1 == '\0') {
    if (1 < param_1) {
                    /* WARNING: Subroutine does not return */
      FUN_180006cdc(5);
    }
    bVar1 = __scrt_is_ucrt_dll_in_use();
    if (((int)CONCAT71(extraout_var,bVar1) == 0) || (param_1 != 0)) {
      in_RAX = 0xffffffffffffffff;
      _DAT_1800241a8 = 0xffffffffffffffff;
      uRam00000001800241b0 = 0xffffffffffffffff;
      _DAT_1800241b8 = 0xffffffffffffffff;
      _DAT_1800241c0 = 0xffffffffffffffff;
      uRam00000001800241c8 = 0xffffffffffffffff;
      _DAT_1800241d0 = 0xffffffffffffffff;
    }
    else {
      in_RAX = _initialize_onexit_table((longlong *)&DAT_1800241a8);
      if (((int)in_RAX != 0) ||
         (in_RAX = _initialize_onexit_table((longlong *)&DAT_1800241c0), (int)in_RAX != 0)) {
        return in_RAX & 0xffffffffffffff00;
      }
    }
    DAT_1800241a1 = '\x01';
  }
  return CONCAT71((int7)(in_RAX >> 8),1);
}

