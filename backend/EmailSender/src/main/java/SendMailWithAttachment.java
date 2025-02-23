import java.io.File;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.Properties;
import javax.mail.*;
import javax.mail.internet.*;

public class SendMailWithAttachment {

    // Method to get hardcoded email addresses
    public static List<String> getHardcodedEmails() {
        return Arrays.asList(
            "user1@example.com",
            "user2@example.com",
            "user3@example.com",
            "user4@example.com"
        );
    }

    public void sendEmails() throws IOException {
        final String from = "your-email@gmail.com"; // Your email address
        final String password = "your-app-password"; // Use an app password instead of your email password

        // SMTP server configuration
        Properties props = new Properties();
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.auth.mechanisms", "PLAIN");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.starttls.required", "true");
        props.put("mail.smtp.ssl.protocols", "TLSv1.2");

        // Create session with authentication
        Session session = Session.getInstance(props, new Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(from, password);
            }
        });

        session.setDebug(true); // Enable debugging

        // Get email list
        List<String> emails = getHardcodedEmails();
        if (emails.isEmpty()) {
            System.out.println("⚠️ No users meet the criteria for sending emails.");
            return;
        }

        for (String to : emails) {
            try {
                // Create a new email message
                Message message = new MimeMessage(session);
                message.setFrom(new InternetAddress(from));
                message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(to));
                message.setSubject("Disaster Alert Notification");

                // Email content
                String msg = "This is to inform you that there is a disaster reported in the vicinity! Stay safe.";

                // Create multipart content
                MimeBodyPart mimeBodyPart = new MimeBodyPart();
                mimeBodyPart.setContent(msg, "text/html");

                Multipart multipart = new MimeMultipart();
                multipart.addBodyPart(mimeBodyPart);

                // Attach file
                MimeBodyPart attachmentBodyPart = new MimeBodyPart();
                attachmentBodyPart.attachFile(new File("D:\\YUSHI_PRGMER\\FOSSHACK\\EMail\\Advisory.pdf"));
                multipart.addBodyPart(attachmentBodyPart);

                message.setContent(multipart);

                // Send email
                Transport.send(message);
                System.out.println("📩 Email successfully sent to: " + to);

            } catch (MessagingException e) {
                System.err.println("❌ Error sending email to " + to + ": " + e.getMessage());
                e.printStackTrace();
            }
        }
    }

    
}
