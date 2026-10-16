
/* Address: 0x180008230; Evidence: ev_8b493105f4ccc82369557d8f47743a486008427e8e0158220d45fb316dc06ab9 */

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
    p_Var1 = (__acrt_ptd *)FUN_180006814();
    in_RAX = FUN_180007f08(-3,'\x01',p_Var1,(__crt_multibyte_data **)&DAT_18001b580);
    DAT_18001b58c = '\x01';
  }
  return CONCAT71((int7)(in_RAX >> 8),1);
}

