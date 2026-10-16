
/* Address: 0x180007f60; Evidence: ev_31ffd6edebafec216d86aac11c069e65089c72933ba7bbf3ccd72b526eaa3810 */

/* Library Function - Single Match
    __acrt_initialize_multibyte
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 __acrt_initialize_multibyte(void)

{
  ulonglong in_RAX;
  __acrt_ptd *p_Var1;
  
  if (DAT_18001a58c == '\0') {
    DAT_18001a578 = &DAT_180019550;
    DAT_18001a580 = &DAT_180019210;
    DAT_18001a570 = &DAT_180019440;
    p_Var1 = (__acrt_ptd *)FUN_180006544();
    in_RAX = FUN_180007c38(-3,'\x01',p_Var1,(__crt_multibyte_data **)&DAT_18001a580);
    DAT_18001a58c = '\x01';
  }
  return CONCAT71((int7)(in_RAX >> 8),1);
}

