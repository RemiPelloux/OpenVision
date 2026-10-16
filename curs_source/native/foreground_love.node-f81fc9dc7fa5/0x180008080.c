
/* Address: 0x180008080; Evidence: ev_32fc2f9df9c8823251738e0b3ca4cbe5c4b827e614f3b9395ead32f82ee2ef71 */

/* Library Function - Single Match
    __acrt_initialize_multibyte
   
   Libraries: Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 __acrt_initialize_multibyte(void)

{
  ulonglong in_RAX;
  __acrt_ptd *p_Var1;
  
  if (DAT_18001b58c == '\0') {
    DAT_18001b578 = &DAT_18001a550;
    DAT_18001b580 = &DAT_18001a210;
    DAT_18001b570 = &DAT_18001a440;
    p_Var1 = (__acrt_ptd *)FUN_180006664();
    in_RAX = FUN_180007d58(-3,'\x01',p_Var1,(__crt_multibyte_data **)&DAT_18001b580);
    DAT_18001b58c = '\x01';
  }
  return CONCAT71((int7)(in_RAX >> 8),1);
}

