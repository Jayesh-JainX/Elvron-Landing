import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { supabase } from "@/lib/supabase-client";

const formSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  companyName: z.string().min(2, "Please enter your company name"),
  email: z.string().email("Please enter a valid email address"),

  partnershipType: z.enum(["technology", "research", "business", "other"], {
    required_error: "Please select a partnership type",
  }),

  description: z
    .string()
    .min(
      50,
      "Please provide more details about your partnership proposal (min. 50 characters)"
    ),
});

export type PartnerFormData = z.infer<typeof formSchema>;

interface StepProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator = ({ currentStep, totalSteps }: StepProps) => (
  <div className="flex items-center justify-between mb-4">
    {Array.from({ length: totalSteps }).map((_, index) => (
      <div key={index} className="flex items-center">
        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${
            index < currentStep
              ? "bg-green-500 text-white"
              : index === currentStep
              ? "bg-neuro-500 text-white"
              : "bg-white/10 text-white/50"
          }`}
        >
          {index < currentStep ? <Check className="w-3 h-3" /> : index + 1}
        </div>
        {index < totalSteps - 1 && (
          <div
            className={`h-0.5 w-8 mx-2 ${
              index < currentStep ? "bg-green-500" : "bg-white/10"
            }`}
          />
        )}
      </div>
    ))}
  </div>
);

export default function PartnerForm({
  onSubmit,
  setIsDialogOpen,
}: {
  onSubmit: (data: PartnerFormData) => void;
  setIsDialogOpen: (open: boolean) => void;
}) {
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<PartnerFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      companyName: "",
      email: "",
      partnershipType: undefined,
      description: "",
    },
  });

  const handleNext = async () => {
    const fields =
      step === 0
        ? (["name", "companyName", "email"] as const)
        : step === 1
        ? (["partnershipType"] as const)
        : (["description"] as const);

    const isValid = await form.trigger(fields);
    if (isValid) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = async (data: PartnerFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("partner_requests").insert([
        {
          name: data.name,
          company_name: data.companyName,
          email: data.email,
          partnership_type: data.partnershipType,
          description: data.description,
        },
      ]);

      if (error) {
        console.error("Submission failed:", error.message);
        alert("Failed to submit. Try again.");
        return;
      }

      form.reset();
      setStep(0);
      setIsDialogOpen(false);
    } catch (err) {
      console.error("Unexpected error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-3">
        <StepIndicator currentStep={step} totalSteps={3} />

        {step === 0 && (
          <div className="space-y-3 animate-in slide-in-from-right">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-sm">
                    Your Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Doe"
                      {...field}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-9 text-sm"
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-sm">
                    Company Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your Company"
                      {...field}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-9 text-sm"
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-sm">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="your@company.com"
                      {...field}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-9 text-sm"
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>
        )}

        {step === 1 && (
          <div className="space-y-3 animate-in slide-in-from-right">
            <FormField
              control={form.control}
              name="partnershipType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-sm">
                    Partnership Type
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white h-9 text-sm">
                        <SelectValue placeholder="Select partnership type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-[#0361DA] border-white/20">
                      <SelectItem
                        value="technology"
                        className="text-white hover:bg-white/10 text-sm"
                      >
                        Technology Partner
                      </SelectItem>
                      <SelectItem
                        value="research"
                        className="text-white hover:bg-white/10 text-sm"
                      >
                        Research Partner
                      </SelectItem>
                      <SelectItem
                        value="business"
                        className="text-white hover:bg-white/10 text-sm"
                      >
                        Business Partner
                      </SelectItem>
                      <SelectItem
                        value="other"
                        className="text-white hover:bg-white/10 text-sm"
                      >
                        Other
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>
        )}

        {step === 2 && (
          <div className="space-y-3 animate-in slide-in-from-right">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-sm">
                    Partnership Description
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your company and how you envision the partnership..."
                      {...field}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[80px] text-sm"
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>
        )}

        <div className="flex justify-between mt-4">
          {step > 0 && (
            <Button
              type="button"
              variant="ghost"
              onClick={handleBack}
              className="text-white hover:bg-white/10 h-8 text-sm px-3"
            >
              <ArrowLeft className="w-3 h-3 mr-1" />
              Back
            </Button>
          )}

          {step < 2 ? (
            <Button
              type="button"
              onClick={handleNext}
              className="bg-neuro-500 hover:bg-neuro-600 text-white ml-auto h-8 text-sm px-3"
            >
              Next
              <ArrowRight className="w-3 h-3 ml-1" />
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-neuro-500 hover:bg-neuro-600 text-white ml-auto h-8 text-sm px-3"
            >
              {isSubmitting ? "Sending..." : "Submit"}
              {!isSubmitting && <ArrowRight className="w-3 h-3 ml-1" />}
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}
