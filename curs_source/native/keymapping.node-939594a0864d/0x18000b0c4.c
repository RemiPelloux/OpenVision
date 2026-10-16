
/* Address: 0x18000b0c4; Evidence: ev_d321ba321fbe805bac877f966e8a3b00f9b3bc7229ceb92118198137140f77fa */

/* Library Function - Multiple Matches With Same Base Name
    void __cdecl uninitialize_environment_internal<char>(char * __ptr64 * __ptr64 & __ptr64)
    void __cdecl uninitialize_environment_internal<wchar_t>(wchar_t * __ptr64 * __ptr64 & __ptr64)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void uninitialize_environment_internal<>(undefined8 *param_1)

{
  if ((undefined8 *)*param_1 != DAT_180028410) {
    free_environment<>((undefined8 *)*param_1);
  }
  return;
}

