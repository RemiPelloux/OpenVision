
/* Address: 0x18000e1f0; Evidence: ev_9b9b617cff628afbcc83fd3c957ef0ca53947b7fc983f480aa24d47b5c34e932 */

/* Library Function - Single Match
    __acrt_initialize_multibyte
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 __acrt_initialize_multibyte(void)

{
  ulonglong in_RAX;
  __acrt_ptd *p_Var1;
  
  if (DAT_1800236fc == '\0') {
    DAT_1800236e8 = &DAT_180022550;
    DAT_1800236f0 = &DAT_180022210;
    DAT_1800236e0 = &DAT_180022440;
    p_Var1 = (__acrt_ptd *)FUN_18000c774();
    in_RAX = FUN_18000dec8(-3,'\x01',p_Var1,(__crt_multibyte_data **)&DAT_1800236f0);
    DAT_1800236fc = '\x01';
  }
  return CONCAT71((int7)(in_RAX >> 8),1);
}

