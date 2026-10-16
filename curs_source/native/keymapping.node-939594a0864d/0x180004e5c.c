
/* Address: 0x180004e5c; Evidence: ev_a720580561367e7bf792e7fb2142dd59c8c80061a1b3591e522831b865a0e381 */

/* Library Function - Single Match
    __scrt_uninitialize_crt
   
   Library: Visual Studio 2019 Release */

undefined8 __scrt_uninitialize_crt(bool param_1,char param_2)

{
  undefined8 in_RAX;
  
  if ((DAT_180028158 == '\0') || (param_2 == '\0')) {
    __acrt_uninitialize(param_1);
    in_RAX = __vcrt_uninitialize(param_1);
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}

