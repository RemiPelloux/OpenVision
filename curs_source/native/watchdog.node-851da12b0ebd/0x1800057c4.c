
/* Address: 0x1800057c4; Evidence: ev_55cf90cc42eac7b5d5e8b1c4a9bedeeb253d78d33664d07943c3294fd4713c90 */

/* Library Function - Multiple Matches With Same Base Name
    void __cdecl uninitialize_environment_internal<char>(char * __ptr64 * __ptr64 & __ptr64)
    void __cdecl uninitialize_environment_internal<wchar_t>(wchar_t * __ptr64 * __ptr64 & __ptr64)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void uninitialize_environment_internal<>(undefined8 *param_1)

{
  if ((undefined8 *)*param_1 != DAT_18001b2b8) {
    free_environment<>((undefined8 *)*param_1);
  }
  return;
}

