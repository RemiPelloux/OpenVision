
/* Address: 0x180005814; Evidence: ev_281e82e920743baab133f6c278242f0526c8ee78f8aa45f02581e5da3477cb59 */

/* Library Function - Single Match
    __vcrt_uninitialize
   
   Library: Visual Studio 2019 Release */

undefined8 __vcrt_uninitialize(char param_1)

{
  undefined8 in_RAX;
  
  if (param_1 == '\0') {
    FUN_180005bc8();
    in_RAX = __vcrt_uninitialize_locks();
  }
  return CONCAT71((int7)((ulonglong)in_RAX >> 8),1);
}

