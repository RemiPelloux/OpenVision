
/* Address: 0x180005618; Evidence: ev_ac025f617f82916dd17751571e282a77f35f7ac6621e6cc46084bf96c49b7e5c */

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

